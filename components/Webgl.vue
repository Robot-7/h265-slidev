<script setup lang="ts">
import * as vue from 'vue';
import { ref } from 'vue';
import vertexShaderGLSL from '@/public/glsl/vertexShader.glsl?raw'; //?raw将资源为字符串
import fragmentShaderGLSL from '@/public/glsl/fragmentShader.glsl?raw';
const canvasRef = ref<WebGLRenderingContext>();

vue.onMounted(() => {

    const canvas = canvasRef.value;
    if (canvas) {
        const gl = (canvas as any).getContext('webgl');
        // 创建着色器
        const program = gl.createProgram();
        //顶点着色器
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        //片段着色器
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

        if (program && vertexShader && fragmentShader) {

            //GLSL代码链接到Shader,且编译着色器
            gl.shaderSource(vertexShader, vertexShaderGLSL);
            gl.compileShader(vertexShader);
            gl.shaderSource(fragmentShader, fragmentShaderGLSL);
            gl.compileShader(fragmentShader);

            // 关联并使用此着色程序
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.log('Shader link failed.');
            }

            //获取着色器中数据槽得位置
            const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
            //创建缓冲，将其与数据源绑定
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

            //向缓存中放入顶点数据
            const positions = [
                -.5, .5,
                -.5, -.5, 
                .5, .5,
            ]
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

            const size = positions.length;


            //渲染部分
            //1.渲染开始就需要使用着色程序
            gl.useProgram(program)

            //2.需要从缓冲当中读取相应的数据：先启用对应的属性（获取位置），其次需要获取具体到哪个缓冲去取值，最后设置读取数据的方式
            gl.enableVertexAttribArray(positionAttributeLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

            // const colors = new Float32Array([
            //     1, 0, 0,
            //     0, 1, 0,
            //     0, 0, 1,
            // ]);
            // //缓冲对象
            // const colorBuffer = gl.createBuffer();
            // //绑定缓冲对象
            // gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
            // //写入数据
            // gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW)
            // //获取attribute 变量
            // const a_Color = gl.getAttribLocation(gl.program, 'a_Color')
            // //修改attribute 变量
            // gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, 0, 0)
            // //赋能-批处理
            // gl.enableVertexAttribArray(a_Color)

            // gl.clear(gl.COLOR_BUFFER_BIT);
            
            //3.绘制操作
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, size)
        }
    }

})

</script>

<template>
    <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
        <canvas ref="canvasRef"></canvas>
    </div>
</template>
