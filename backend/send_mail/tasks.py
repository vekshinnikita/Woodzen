from .celery import app
from .service import send, send_mailing


@app.task
def send_order_mail(dict):
    send(dict)

@app.task
def send_maling_to_subscribers(data):
    send_mailing(data)