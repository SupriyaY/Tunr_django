from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('artists', views.ArtistView)


urlpatterns = [
   path('', include(router.urls)),

]


# tunr/urls.py
# from django.urls import path
# from . import views
# from rest_framework.routers import DefaultRouter

# urlpatterns = [
#     path('artists/', views.ArtistList.as_view(), name='artist_list'),
#     path('artists/<int:pk>', views.ArtistDetail.as_view(), name='artist_detail'),
# ]