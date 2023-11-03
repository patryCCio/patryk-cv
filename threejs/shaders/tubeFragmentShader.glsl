uniform float u_time;
uniform sampler2D u_dots;
uniform sampler2D u_stripes;
varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;

void main() {

    float time1 = u_time * 0.01;
    float time2 = u_time * 0.01;

    float texture1 = texture2D(u_stripes, vUv - time1).r;
    float texture11 = texture2D(u_stripes, vUv - time1 * 1.5).r;
    float texture3 = texture2D(u_dots, vUv * vec2(6.0, 4.0) - time1 * 1.5).r;

    float alpha = min(texture1, texture11) + texture3;

    vec3 viewDir = -normalize(vWorldPosition.xyz - cameraPosition);

    float fresnel = dot(viewDir, vNormal);
    fresnel = pow(fresnel, 3.0);

    vec3 color1 = vec3(0.579, 0.903, 0.983);
    gl_FragColor = vec4(color1, 1.0);
    gl_FragColor = vec4(vUv, 0.0, 1.0);
    gl_FragColor = vec4(vec3(color1), alpha * fresnel);
      // gl_FragColor = vec4(vec3(fresnel), 1.0);
}