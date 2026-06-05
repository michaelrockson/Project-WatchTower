from fastapi import APIRouter

from models.auth_models import AuthPayload

router = APIRouter(prefix = "/auth", tags = ["auth"])

@router.post("/login")
def authenticate_user(request: AuthPayload):
    return {}

@router.post("/login/guest")
def authenticate_as_guest():
    return {}
