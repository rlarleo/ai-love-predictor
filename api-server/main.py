
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import test_test

origins = ["*"]

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Model(BaseModel):
    name: str
    sex: str

@app.get("/test")
def test():
    print(test_test.test2())
    print('hi')
    return 'hello test'

@app.post("/")
def test(data: Model):
    return 'hello2'