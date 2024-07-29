from django.urls import path
from . import views
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('user/register/', CreateUserView.as_view(), name="register"),
    path('token/', TokenObtainPairView.as_view(), name="get_token"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh"),

    path("stocks/", views.StockListCreate.as_view(), name="stock-list"),
    path("stocks/delete/<int:pk>/", views.StockDelete.as_view(), name="delete-stock"),
]