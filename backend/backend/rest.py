import json
import random
from typing import Literal, Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Word(BaseModel):
    english: str
    french: str
    gender: Literal["m", "f"]


words = []
with open("words.jsonl") as f:
    for line in f:
        words.append(Word(**json.loads(line)))


@app.get("/", response_model=Word)
def sample_words(user_id: Optional[int] = None):
    """Sample words for the frontend client"""
    if user_id is not None:
        raise NotImplementedError
    return random.choice(words)


def start():
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
