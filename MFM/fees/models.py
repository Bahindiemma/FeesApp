from django.db import models
from django.contrib.auth import get_user_model
from django.db.models import aggregates
from django.utils import timezone


class Staff(models.Model):
    name         = models.CharField(max_length=250)
    email        = models.EmailField()
    password     = models.CharField(max_length=50)
    address      = models.CharField(max_length=250)
    created_at   = models.DateField(auto_now_add=True)
    updated_at   = models.DateField(auto_now_add=True)


class Hod(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)


class Student(models.Model):
    firstname         = models.CharField(max_length=250)
    lastname          = models.CharField(max_length=250)
    gender            = models.CharField(max_length=10)    
    class_name        = models.CharField(max_length=10)
    password          = models.CharField(max_length=50)
    profile_pic       = models.ImageField()
    created_at        = models.DateField(auto_now_add=True)
    updated_at        = models.DateField(auto_now_add=True)


class Subject(models.Model):
    student     = models.ForeignKey(Student, on_delete=models.CASCADE)
    staff       = models.ForeignKey(Staff, on_delete=models.CASCADE)
    subject     = models.CharField(max_length=100)


class Level(models.Model):
    student         = models.ForeignKey(Student, on_delete=models.CASCADE)
    staff           = models.ForeignKey(Staff, on_delete=models.CASCADE)
    class_name      = models.CharField(max_length=100)


class Attendance(models.Model):
    subject_id    = models.ForeignKey(Subject, on_delete= models.CASCADE)
    staff         = models.ForeignKey(Staff, on_delete=models.CASCADE)


class Report(models.Model):
    student     = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject     = models.ForeignKey(Subject, on_delete=models.CASCADE)
    mark        = models.CharField(max_length=100)
    grade       = models.CharField(max_length=10)
    agg         = models.IntegerField()


class Notification_Staff(models.Model):
    student     = models.ForeignKey(Student, on_delete=models.CASCADE)
    staff       = models.ForeignKey(Staff, on_delete=models.CASCADE)
    message     = models.TextField()


class Leave(models.Model):
    staff       = models.ForeignKey(Staff, on_delete=models.CASCADE)
    leave_date  = models.DateField()


class Student_Notifications(models.Model):
    student      = models.ForeignKey(Student, on_delete=models.CASCADE)
    message      = models.TextField()


