uniform float u_time;
varying vec3 vPosition;
uniform sampler2D texture1;
float PI = 3.141592653589793238;
attribute vec3 aRandom;
attribute float aSize;

vec3 getPos(float progress) {
    float angle = progress * PI * 2.0;

    float x = sin(angle) + 2.0 * sin(2.0 * angle);
    float y = cos(angle) - 2.0 * cos(2.0 * angle);
    float z = -sin(3.0 * angle);

    return vec3(x, y, z);
}

vec3 getTangent(float progress) {
    float angle = progress * PI * 2.0;

    float x = cos(angle) + 4.0 * cos(2.0 * angle);
    float y = -sin(angle) + 4.0 * sin(2.0 * angle);
    float z = 3.0 * -cos(3.0 * angle);

    return normalize(vec3(x, y, z));
}

vec3 getNormal(float progress) {
    float angle = progress * PI * 2.0;

    float x = -sin(angle) - 8.0 * sin(2.0 * angle);
    float y = -cos(angle) + 8.0 * cos(2.0 * angle);
    float z = 9.0 * sin(3.0 * angle);

    return normalize(vec3(x, y, z));
}

void main() {
    vec3 pos = position;
    float progress = fract(u_time * 0.05 + aRandom.x);
    pos = getPos(progress);
    vec3 normal = getNormal(progress);
    vec3 tangent = getTangent(progress);
    vec3 binormal = normalize(cross(normal, tangent));

    float radius = 0.3 + aRandom.z * 0.1;
    float cx = radius * cos(aRandom.y * PI * 2.0 * u_time * 0.5 + aRandom.z * 7.0);
    float cy = radius * sin(aRandom.y * PI * 2.0 * u_time * 0.5 + aRandom.z * 7.0);

    pos += (normal * cx + binormal * cy);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 10.0 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}