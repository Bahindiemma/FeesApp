from django.db import models
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm,StaffForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout


def enrollment_view(request, *args, **kwargs):
    return render(request, "enrollment.html", {})



def invoices_view(request, *args, **kwargs):
    return render(request, "invoices.html", {})



def home_view(request, *args, **kwargs):
    return render(request, "home.html", {})



def signup_view(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user = form.cleaned_data.get('username')
            messages.success(request, 'Account was created successfully for '+ user)

            return redirect('login')

    context = {'form':form}
    return render(request, "signup.html",context)


def login_view(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('students')

    context = {}
    return render(request, "login.html", context)


def attendance_view(request, *args, **kwargs):
    return render(request, "at/tendance.html", {})


def leave_view(request, *args, **kwargs):
    return render(request, "leave.html", {})


def notification_view(request, *args, **kwargs):
    return render(request, "notification.html", {})


def profile_view(request, *args, **kwargs):
    return render(request, "profile.html", {})


def performance_view(request, *args, **kwargs):
    return render(request, "staff_performance.html", {})


def staff_profile_view(request, *args, **kwargs):

   # form = StaffForm()
    #if request.method == 'POST':
     #   print(request.POST)

   # context = {'form':form}
   
    return render(request, "staff_profile.html", context)


def students_view(request, *args, **kwargs):
    return render(request, "students.html", {})


def report_view(request, *args, **kwargs):
    return render(request, "report.html", {})


def transactions_view(request, *args, **kwargs):
    return render(request, "transactions.html", {})


