#!/usr/bin/env python3
"""静態站點服務：真實檔案優先，其餘回退 index.html（配合 Vue history 模式）。"""
from __future__ import annotations

import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.environ.get("JINGPAN_ROOT", "/var/www/jingpan")
HOST = os.environ.get("JINGPAN_HOST", "0.0.0.0")
PORT = int(os.environ.get("JINGPAN_PORT", "80"))


class SpaHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def _rewrite_to_index_if_needed(self) -> None:
        raw = self.path.split("?", 1)[0].split("#", 1)[0]
        local = self.translate_path(raw)
        if os.path.isdir(local):
            for name in ("index.html", "index.htm"):
                if os.path.isfile(os.path.join(local, name)):
                    return
            self.path = "/index.html"
        elif not os.path.isfile(local):
            self.path = "/index.html"

    def do_GET(self):  # noqa: N802
        self._rewrite_to_index_if_needed()
        return SimpleHTTPRequestHandler.do_GET(self)

    def do_HEAD(self):  # noqa: N802
        self._rewrite_to_index_if_needed()
        return SimpleHTTPRequestHandler.do_HEAD(self)

    def log_message(self, fmt: str, *args) -> None:
        sys_stderr = __import__("sys").stderr
        sys_stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


def main() -> None:
    os.makedirs(ROOT, exist_ok=True)
    server = ThreadingHTTPServer((HOST, PORT), SpaHandler)
    print(f"jingpan spa server on http://{HOST}:{PORT} root={ROOT}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
