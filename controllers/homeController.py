from flask import render_template

def homeController():
    return render_template('entregadoresHTML.html')