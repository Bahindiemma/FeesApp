from fees.models import Student
from django.contrib import admin
from .models import Attendance, Hod, Level, Notification_Staff, Report, Staff, Student, Student_Notifications, Subject


# Register your models here.

admin.site.register(Student)
admin.site.register(Staff)
admin.site.register(Hod)
admin.site.register(Subject)
admin.site.register(Level)
admin.site.register(Attendance)
admin.site.register(Report)
admin.site.register(Notification_Staff)
admin.site.register(Student_Notifications)