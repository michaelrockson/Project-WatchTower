from pydantic import BaseModel

class AuthPayload(BaseModel):
    email: str
    password: str