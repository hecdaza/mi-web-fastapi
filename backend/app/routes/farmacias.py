from fastapi import APIRouter
from app.programas.farmacias import obtener_farmacias

router = APIRouter(prefix="/farmacias", tags=["Farmacias"])

@router.get("/")
def farmacias_turno():
    return obtener_farmacias()
