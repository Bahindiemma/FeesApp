import django
from django.contrib import admin
from django.urls import path
from . import views

#django header customization
admin.site.site_header = "Amon Mukalazi Memorial Admin Pannel"
admin.site.site_title = "Welcome to school Dashboard"
admin.site.index_title = "Welcome to this Portal"

urlpatterns = [
    path('attendance/', views.attendance_view, name="attendance"),
    path('enrollment/', views.enrollment_view, name="enrollment"),
    path('', views.home_view, name="home"),
    path('invoices/', views.invoices_view, name="invoices"),
    path('login/', views.login_view, name="login"),
    path('notification/', views.notification_view, name="notification"),  
    path('profile/', views.profile_view, name="profile"),
    path('leave/', views.leave_view, name="leave"),    
    path('performance/', views.performance_view, name="performance"),
    path('staff_profile/', views.staff_profile_view, name="staff_profile"),
    path('students/', views.students_view, name="students"),
    path('signup/', views.signup_view, name="signup"),

]
