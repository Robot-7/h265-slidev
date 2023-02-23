attribute vec4 a_position;
attribute vec4 a_Color;
varying vec4 v_Color;
void main() {
    gl_Position = a_position;
    v_Color = a_Color;
}