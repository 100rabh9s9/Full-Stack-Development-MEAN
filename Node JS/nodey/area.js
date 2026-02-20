function circleArea(radius)
{
    return 3.14*radius*radius
}
function Rectangle(length,breadth)
{
    return length*breadth
}
function triangle(base,height)
{
    return 0.5*base*height
}
module.exports.circleArea = circleArea
module.exports.Rectangle  = Rectangle
module.exports.triangle = triangle
