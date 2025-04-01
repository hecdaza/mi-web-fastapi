from fastapi import APIRouter
from app.programas.APIclima import obtener_clima

router = APIRouter(prefix="/clima", tags=["Clima"])

@router.get("/{comuna}")
def clima_por_comuna(comuna: str):
    return obtener_clima(comuna)
