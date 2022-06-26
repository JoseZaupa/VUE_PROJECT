import Vue from 'vue';
import Router from 'vue-router';
import Alunos from './components/Aluno/Alunos'
import AlunoDetalhe from './components/Aluno/AlunoDetalhe'
import Professor from './components/Professor/Professor'
import Sobre from './components/Sobre/Sobre'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/professores',
            nome: 'Professores',
            component: Professor,
        },
        {
            path: '/aluno/:prof_id',
            nome: 'Alunos',
            component: Alunos,
        },
        {
            path: '/alunoall/',
            nome: 'Alunos',
            component: Alunos,
        },
        {
            path: '/alunoDetalhe/:id',
            nome: 'AlundoDetalhe',
            component: AlunoDetalhe,
        },
        {
            path: '/sobre',
            nome: 'Sobre',
            component: Sobre,
        }

    ]
})