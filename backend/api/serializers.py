from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Stock


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ["id", "stockSymbol", "saved_at", "username"]
        extra_kwargs = {"username": {"read_only": True}}