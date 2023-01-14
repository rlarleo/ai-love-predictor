from fastapi import FastAPI
from pydantic import  BaseModel
from fastapi.middleware.cors import CORSMiddleware

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
    

@app.get("/")
def test():
    return 'hello'


@app.post("/")
def test(data: Model):
    return 'hello'