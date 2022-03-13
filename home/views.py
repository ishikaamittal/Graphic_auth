from .forms import UserRegisterForm
from django.shortcuts import render, redirect
from django.contrib import messages
# Create your views here.
def home(request):
    return render(request, "home.html")

def Register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(
                request, f'Your Account has  been created! You can Login now.')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, "register.html", {'form': form})