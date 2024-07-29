from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Stock(models.Model):
    stockSymbol = models.CharField(max_length=100)
    saved_at = models.DateTimeField(auto_now_add=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, related_name="stocks")

    def __str__(self):
        return self.stockSymbol