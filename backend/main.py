from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import clima, farmacias, bnc, indicadores, auth

app = FastAPI()

# Permitir el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Reemplaza con el dominio de producción si es necesario
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir las rutas
app.include_router(auth.router)
app.include_router(clima.router)
app.include_router(farmacias.router)
app.include_router(bnc.router)
app.include_router(indicadores.router)

@app.get("/")
def root():
    return {"message": "API backend operativo"}
