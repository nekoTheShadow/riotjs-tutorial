@echo off

REM CDNで配布されるRiot.jsを利用する関係上、ローカルPCではCORS問題が発生する。
REM これを避けるため、稼働確認にはDockerとhttpdを利用する (要はサーバにデプロイする)
REM httpdの公式イメージ: https://hub.docker.com/_/httpd

REM build.batを実行後、以下のURLにアクセスする
REM http://localhost:8080/index.html
REM 稼働確認終了後はCtrl+Cで終了すると、コンテナごと消えてなくなる

docker run -it --rm -p 8080:80 -v %~dp0html:/usr/local/apache2/htdocs/ httpd:2.4
