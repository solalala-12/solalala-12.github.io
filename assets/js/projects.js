$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/parentsvoice.jpg',
            link: 'https://github.com/solalala-12/Tacotron_Deep-Voice',
            title: 'STT - Tacotron ',
            demo: false,
            technologies: ['Python','Docker'],
            description: "부모님이 읽어주는 동화 서비스 개발을 위한 STT Module / STT Module for Parents Reading Book AI Services",
            categories: ['featured', 'AI']
        },
        {
            image: 'assets/images/singingconversion.jpg',
            link: 'https://github.com/solalala-12/Singing-Voice-Conversion/',
            title: 'Singing Conversion',
            demo: false,
            technologies: ['Python'],
            description: "Singing Voice Conversion - Cycle GAN",
            categories: ['featured', 'AI']
        },
        {
            image: 'assets/images/textsummarize.jpg',
            link: 'https://github.com/solalala-12/Text_Summarize_Seq2seq',
            title: 'Text_Summarize - Seq2Seq2',
            demo: 'https://github.com/solalala-12/Text_Summarize_Seq2seq/blob/master/View_predict.ipynb',
            technologies: ['Python'],
            description: "인사팀 주관식 설문조사 요약을 위한 Text Summarize Module ",
            categories: ['featured', 'AI']
        },
        {
            image: 'assets/images/keyword.jpg',
            link: 'https://github.com/solalala-12/Keyword_Trend_Analysis',
            title: 'PageRank Positive/ Negative Keyword Analysis ',
            demo: false,
            technologies: ['Python'],
            description: "북프렌 카페 데이터를 이용한 자사 특정 상품에 대한 긍/부정 키워드 연관 분석",
            categories: ['featured', 'Analysis']
        },
        {
            image: 'assets/images/k8s.jpg',
            link: 'https://github.com/solalala-12/Docker_images/tree/master/k8s_flask_gunicorn',
            title: 'REST API',
            demo: false,
            technologies: ['Python','Flask','Docker','K8s'],
            description: "K8s 가상환경 플랫폼 구축",
            categories: ['Platform']
        },
        {
            image: 'assets/images/java.jpg',
            link: 'https://github.com/solalala-12/JAVA_PROJECT/tree/master/JAVA/java_final_project',
            title: 'Student Management Platform',
            demo: false,
            technologies: ['JAVA'],
            description: "학생 관리를 위한 자바 플랫폼",
            categories: ['Platform']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}