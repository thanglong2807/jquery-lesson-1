$(document).ready(function() {
 $(".btn-circle").on('click',function (){
    $(".active").removeClass('square rectangle').addClass('circle')
 })
 $(".btn-square").on('click',function (){
    $(".active").removeClass('circle rectangle').addClass('square')
 })
 $(".btn-rectangle").on('click',function (){
    $(".active").removeClass('circle square').addClass('rectangle')
 })
 $(".btn-hidden").on('click',function (){
    $(".active").removeClass('show toggle').addClass('hidden')
 })
 $(".btn-show").on('click',function (){
    $(".active").removeClass('hidden toggle').addClass('show')
 })
 $(".btn-toggle").on('click',function (){
    $(".active").removeClass('show ').toggleClass("hidden")
 })
})