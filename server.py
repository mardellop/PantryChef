Now I'll build the entire landing page. Let me create all files in parallel.
Action: file_editor create /app/backend/server.py --file-text "from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix=\"/api\")


# Models
class NewsletterSubscription(BaseModel):
    model_config = ConfigDict(extra=\"ignore\")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    subscribed_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class NewsletterCreate(BaseModel):
    email: str

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra=\"ignore\")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class ContactCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class NewsArticle(BaseModel):
    model_config = ConfigDict(extra=\"ignore\")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    image_url: str
    category: str
    published_at: str
    read_time: str


# Routes
@api_router.get(\"/\")
async def root():
    return {\"message\": \"Pantry Chef API\"}

@api_router.post(\"/newsletter\", response_model=NewsletterSubscription)
async def subscribe_newsletter(data: NewsletterCreate):
    existing = await db.newsletter.find_one({\"email\": data.email}, {\"_id\": 0})
    if existing:
        raise HTTPException(status_code=400, detail=\"Este email ya esta suscrito\")
    sub = NewsletterSubscription(email=data.email)
    doc = sub.model_dump()
    await db.newsletter.insert_one(doc)
    return sub

@api_router.get(\"/newsletter\", response_model=List[NewsletterSubscription])
async def get_subscribers():
    subs = await db.newsletter.find({}, {\"_id\": 0}).to_list(1000)
    return subs

@api_router.post(\"/contact\", response_model=ContactMessage)
async def create_contact(data: ContactCreate):
    msg = ContactMessage(**data.model_dump())
    doc = msg.model_dump()
    await db.contact.insert_one(doc)
    return msg

@api_router.get(\"/contact\", response_model=List[ContactMessage])
async def get_contacts():
    contacts = await db.contact.find({}, {\"_id\": 0}).to_list(1000)
    return contacts

@api_router.get(\"/news\", response_model=List[NewsArticle])
async def get_news():
    count = await db.news.count_documents({})
    if count == 0:
        await seed_news()
    articles = await db.news.find({}, {\"_id\": 0}).sort(\"published_at\", -1).to_list(100)
    return articles


async def seed_news():
    articles = [
        {
            \"id\": str(uuid.uuid4()),
            \"title\": \"5 recetas rapidas para la semana\",
            \"excerpt\": \"Descubre como preparar comidas saludables en menos de 20 minutos con ingredientes que ya tienes en tu despensa.\",
            \"image_url\": \"https://images.unsplash.com/photo-1607264021653-0a884a9740cd?w=600\",
            \"category\": \"Recetas\",
            \"published_at\": \"2025-12-01T10:00:00Z\",
            \"read_time\": \"5 min\"
        },
        {
            \"id\": str(uuid.uuid4()),
            \"title\": \"Como reducir el desperdicio de alimentos\",
            \"excerpt\": \"Aprende trucos sencillos para aprovechar al maximo cada ingrediente y contribuir a un mundo mas sostenible.\",
            \"image_url\": \"https://images.unsplash.com/photo-1642635055753-3eec6c0b2a6e?w=600\",
            \"category\": \"Sostenibilidad\",
            \"published_at\": \"2025-11-25T10:00:00Z\",
            \"read_time\": \"4 min\"
        },
        {
            \"id\": str(uuid.uuid4()),
            \"title\": \"La IA en tu cocina: el futuro de la alimentacion\",
            \"excerpt\": \"Exploramos como la inteligencia artificial esta revolucionando la forma en que planificamos y preparamos nuestras comidas.\",
            \"image_url\": \"https://images.unsplash.com/photo-1661257711676-79a0fc533569?w=600\",
            \"category\": \"Tecnologia\",
            \"published_at\": \"2025-11-18T10:00:00Z\",
            \"read_time\": \"6 min\"
        }
    ]
    await db.news.insert_many(articles)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=[\"*\"],
    allow_headers=[\"*\"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event(\"shutdown\")
async def shutdown_db_client():
    client.close()
"
Observation: Overwrite successful: /app/backend/server.py
