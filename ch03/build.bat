@echo off

REM CDN�Ŕz�z�����Riot.js�𗘗p����֌W��A���[�J��PC�ł�CORS��肪��������B
REM ���������邽�߁A�ғ��m�F�ɂ�Docker��httpd�𗘗p���� (�v�̓T�[�o�Ƀf�v���C����)
REM httpd�̌����C���[�W: https://hub.docker.com/_/httpd

REM build.bat�����s��A�ȉ���URL�ɃA�N�Z�X����
REM http://localhost:8080/index.html
REM �ғ��m�F�I�����Ctrl+C�ŏI������ƁA�R���e�i���Ə����ĂȂ��Ȃ�

docker run -it --rm -p 8080:80 -v %~dp0html:/usr/local/apache2/htdocs/ httpd:2.4
