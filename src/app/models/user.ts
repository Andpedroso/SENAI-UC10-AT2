export interface RequestCreate 
{
    name: string;
    sobrenome: string;
    idade: string;
    estadocivil: string;
    celular: string;
    vaga: string;
    email: string;
}

export interface ResponseCreate 
{
    name: string;
    sobrenome: string;
    idade: string;
    estadocivil: string;
    celular: string;
    vaga: string;
    email: string;
    id: string;
}

export interface User 
{
    name: string;
    sobrenome: string;
    idade: string;
    estadocivil: string;
    celular: string;
    vaga: string;
    email: string;
    id: string;
}

export interface ResponseUser 
{
    data: User
}

export interface RequestUpdate 
{
    name: string;
    sobrenome: string;
    idade: string;
    estadocivil: string;
    celular: string;
    vaga: string;
    email: string;
}

export interface ResponseUpdate 
{
    name: string;
    sobrenome: string;
    idade: string;
    estadocivil: string;
    celular: string;
    vaga: string;
    email: string;
}