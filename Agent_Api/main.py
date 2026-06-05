from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import auth, dashboard

app = FastAPI(
    title = "Agent_API",
    version = "1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for development
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(auth.router)
app.include_router(dashboard.router)

