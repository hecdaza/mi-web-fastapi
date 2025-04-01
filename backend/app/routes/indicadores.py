from fastapi import APIRouter
from app.programas.indicadores import obtener_indicadores

router = APIRouter(prefix="/indicadores", tags=["Indicadores Económicos"])

@router.get("/")
def indicadores_economicos():
    return obtener_indicadores()
