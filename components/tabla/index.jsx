import React from 'react';
import { Table, Button, Space } from 'antd';

export const Tabla = () => {
    return (
        <div>
            <h1>Organización</h1>
            <section>
                <Space style={{ marginBottom: 16 }}>
                    <Button>Divisiones</Button>
                    <Button>Colaboradores</Button>
                </Space>
                <div></div>
            </section>
        </div>
    );
};
