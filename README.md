# Как развернуть docker container на VDS

## Задание переменных окружения


1. В ./backend в файле .env.dev указать переменные для входа в почту (предварительно настроить yandex почту для доступа приложений) и указать email для получения письм о заказе, также указать HOST и PROTOCOL

2. В ./frontend/src в файле env.ts указать имя домена и протокол


## Сборка production build

1. Установить npm пакет

2. В ./frontend установить все библиотеки командой ```npm install```

3. Собрать production build командой ```npm run build ```


## Запуск контейнера
Предварительно установить docker и docker-compose

1. Выполнить команду   ```docker-compose bild```

2. Запустить проект командой ```docker-compose up -d```
