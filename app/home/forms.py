
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ValidationError
# from django.contrib.auth.forms import AuthenticationForm


class UserRegisterForm(UserCreationForm):

    username = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'placeholder': 'Username', 'class': 'form-control', 'autocomplete': 'off'}))
    email = forms.EmailField(widget=forms.EmailInput(
        attrs={'placeholder': 'E-mail ID', 'class': 'form-control', 'autocomplete': 'off'}))
    password1 = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'placeholder': 'password', 'class': 'form-control', 'autocomplete': 'off', 'id': 'password'}))
    password2 = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'placeholder': 'password', 'class': 'form-control', 'autocomplete': 'off', 'id': 'password2'}))

    # def clean(self):
    #    email = self.cleaned_data.get('email')
    #    if User.objects.filter(email=email).exists():
    #         raise ValidationError("Email exists")
    #    return self.cleaned_data

    class Meta:
        model = User
        fields = ['email', 'username', 'password1', 'password2']
