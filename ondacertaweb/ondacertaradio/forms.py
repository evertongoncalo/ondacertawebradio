from django import forms 
from .models import Email

class Newsletter(forms.ModelForm):
   
    class Meta:
        model = Email  #model sempre
        fields = "__all__"
    
    
 
    