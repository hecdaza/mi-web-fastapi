from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/auth", tags=["Autenticación"])

# Usuario simulado
fake_user = {
    "username": "admin",
    "password": "1234"
}

class LoginData(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(data: LoginData):
    if data.username == fake_user["username"] and data.password == fake_user["password"]:
        return {"access_token": "fake-jwt-token", "user": data.username}
    else:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")
