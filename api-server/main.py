
from fastapi import FastAPI, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import use.binary

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

@app.get("/predict/")
def predict(param: List[int] = Query([0, 0, 0], max=100, min = 0)):
    print(param)
    outputs = use.binary.getProbability(param)
    print(outputs)
    return outputs

@app.post("/")
def test(data: Model):
    return 'hello2'