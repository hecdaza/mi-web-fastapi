from fastapi import APIRouter
from app.programas.bnc import obtener_leyes

router = APIRouter(prefix="/bnc", tags=["Leyes BNC"])

@router.get("/")
def ultimas_leyes():
    return obtener_leyes()
