from django.contrib import admin
from django.urls import path
from fees.views import home_view, login_view, attendance_view, signup_view, feedback_view, leave_view, students_view, staff_view, notification_view,login_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name="home"),
    path('login/', login_view, name="login"),
    path('attendance/', attendance_view, name="attendance"),
    path('feedback/', feedback_view, name="feedback"),
    path('leave/', leave_view, name="leave"),
    path('notification/', notification_view, name="notification"),
    path('staff/', staff_view, name="staff"),
    path('students/', students_view, name="students"),
    path('signup/', signup_view, name="signup"),

]
