from django.shortcuts import render
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm

def home_view(request, *args, **kwargs):
    return render(request, "home.html", {})


def login_view(request, *args, **kwargs):
    context = {
        "username":"Bahindiemma",
        "password":"NathanilE2018!=",
    }
    return render(request, "login.html", context)


def attendance_view(request, *args, **kwargs):
    return render(request, "at/tendance.html", {})


def feedback_view(request, *args, **kwargs):
    return render(request, "feedback.html", {})


def leave_view(request, *args, **kwargs):
    return render(request, "leave.html", {})


def notification_view(request, *args, **kwargs):
    return render(request, "notification.html", {})


def profile_view(request, *args, **kwargs):
    return render(request, "profile.html", {})


def staff_view(request, *args, **kwargs):
    return render(request, "staff.html", {})


def students_view(request, *args, **kwargs):
    return render(request, "students.html", {})


def signup_view(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form':form}
    return render(request, "signup.html",context)

