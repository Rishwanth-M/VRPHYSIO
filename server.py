#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 5000
HOST = "0.0.0.0"

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        print(f"{self.address_string()} - [{self.log_date_time_string()}] {format % args}")

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

with ReusableTCPServer((HOST, PORT), MyHTTPRequestHandler) as httpd:
    print(f"Server running at http://{HOST}:{PORT}/")
    print(f"Serving files from: {os.getcwd()}")
    httpd.serve_forever()
