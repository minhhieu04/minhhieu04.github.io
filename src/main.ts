import './style.css';

type Language = 'en' | 'vi';
const vi: Record<string, string> = {
  skip:'Đến nội dung chính',navWork:'Dự án',navAbout:'Giới thiệu',navContact:'Liên hệ',
  heroOne:'Từ ý tưởng',heroTwo:'đến điều có ích.',
  heroIntro:'Mình là Hiếu Trần — luôn tò mò và thích làm điều mới tại Đà Nẵng. Mình kết nối con người, ý tưởng và công nghệ để công việc hằng ngày tốt hơn một chút.',
  explore:'Khám phá dự án',resume:'Xem CV',portraitCaption:'Một chút tò mò, nhiều điều để khám phá.',
  capabilityOne:'Sản phẩm số',capabilityTwo:'AI & tự động hóa',capabilityThree:'Giải quyết vấn đề thực tế',
  selectedWork:'Nhiều lĩnh vực.',workEmphasis:'Cùng sự tò mò.',workSubtitle:'Học tập, cộng đồng, vận hành — một số sản phẩm mình đã góp phần xây dựng.',
  signSummary:'Đưa ngôn ngữ ký hiệu Việt Nam đến gần hơn.',personal:'Khám phá cá nhân',professional:'Đóng góp trong đội ngũ',
  caseStudy:'Xem chi tiết',mapPeople:'Con người',mapWorkflows:'Quy trình',mapClarity:'Rõ ràng',roberpLine:'Giúp công việc vận hành hằng ngày rõ ràng hơn.',glLine:'Kết nối dịch vụ cộng đồng',gdosLine:'Vận hành bất động sản & bàn giao',aienLine:'Nền tảng học tập có AI hỗ trợ',
  teamNote:'Đóng góp trong đội ngũ, phạm vi rõ ràng.',privacyNote:'Code nội bộ và dữ liệu khách hàng được giữ riêng tư.',
  aboutTitle:'Một chút về mình',aboutHeadingOne:'Luôn muốn hiểu.',aboutHeadingTwo:'Luôn muốn làm.',
  aboutBodyOne:'Mình thích tìm hiểu cách mọi thứ vận hành — và làm cho chúng tốt hơn. Kinh nghiệm của mình trải từ phần mềm, quy trình công việc đến những thử nghiệm cá nhân về học tập và khả năng tiếp cận.',
  aboutBodyTwo:'Mình sẵn sàng cho nhiều vai trò và ngành nghề, nơi sự ham học, giao tiếp rõ ràng và khả năng giải quyết vấn đề thực tế có ích. Công nghệ là một công cụ mình mang theo, không phải giới hạn cho công việc mình có thể làm.',
  understandTitle:'Thấu hiểu',understandBody:'Bắt đầu từ con người và vấn đề thật.',makeTitle:'Thực hiện',makeBody:'Biến ý tưởng thành điều có thể trải nghiệm.',improveTitle:'Cải thiện',improveBody:'Kiểm tra, lắng nghe và làm tốt hơn.',
  experienceLabel:'Kinh nghiệm',experienceDetail:'Backend Developer · Tháng 2/2024 — Hiện tại',educationLabel:'Học vấn',educationDetail:'Công nghệ thông tin · 2019 — 2023',
  contactOne:'Việc tốt bắt đầu',contactTwo:'từ một cuộc trò chuyện.',contactBody:'Sẵn sàng cho công việc, dự án và một hướng đi mới.',getInTouch:'Kết nối với mình',copyEmail:'Sao chép email',footerLine:'Đà Nẵng, Việt Nam'
};
const elements = [...document.querySelectorAll<HTMLElement>('[data-i18n]')];
const en = Object.fromEntries(elements.map(el => [el.dataset.i18n!, el.textContent ?? '']));

interface Project {
  title: string;
  type: [string, string];
  lede: [string, string];
  context: [string, string];
  contribution: [string, string];
  architecture: [string, string];
  flow: string[];
  stack: string;
  limit: [string, string];
  source?: string;
}
const projects: Record<string, Project> = {
  signbridge:{
    title:'SignBridge',type:['Personal project · In development','Dự án cá nhân · Đang phát triển'],
    lede:['Making Vietnamese Sign Language more approachable, one useful learning interaction at a time.','Đưa ngôn ngữ ký hiệu Việt Nam đến gần hơn, qua từng trải nghiệm học tập thiết thực.'],
    context:['A learning-first web application with lessons, a dictionary, quizzes and review tools. It also provides a controlled space to explore camera-based sign recognition.','Ứng dụng web ưu tiên việc học với bài học, từ điển, câu hỏi và ôn tập. Sản phẩm cũng tạo không gian thử nghiệm nhận diện ký hiệu qua camera với phạm vi có kiểm soát.'],
    contribution:['I build and iterate on the React/TypeScript learning experience, connect local AI service interfaces, and work on collection and curation flows with consent and provenance checks.','Mình phát triển và cải thiện trải nghiệm React/TypeScript, kết nối giao diện dịch vụ AI local, xây luồng thu thập và duyệt dữ liệu có kiểm tra đồng ý và nguồn gốc.'],
    architecture:['The browser handles learning, review and local collection. MediaPipe supports the scoped camera demo; a FastAPI gateway and ONNX runtime adapters provide extension points for recognition experiments.','Trình duyệt xử lý học tập, ôn tập và thu thập local. MediaPipe phục vụ demo camera giới hạn; FastAPI gateway và adapter ONNX tạo điểm mở rộng cho thử nghiệm nhận diện.'],
    flow:['React learning UI','Local collection & review','Scoped AI adapters'],stack:'React · TypeScript · Vite · FastAPI · MediaPipe · ONNX',
    limit:['Status: working learning UI and experimental recognition. This is not a validated continuous VSL translator. Model quality, licensed data and real-world evaluation remain active work.','Hiện trạng: giao diện học tập hoạt động, nhận diện ở mức thử nghiệm. Đây chưa phải hệ thống dịch VSL liên tục đã được kiểm chứng. Chất lượng mô hình, quyền dữ liệu và đánh giá thực tế vẫn đang được phát triển.'],source:'https://github.com/minhhieu04/sign-bridge'
  },
  roberp:{title:'ROBERP',type:['Professional work · Enterprise software','Dự án công việc · Phần mềm doanh nghiệp'],
    lede:['Supporting everyday operations with clearer workflows and consistent access control.','Hỗ trợ vận hành hằng ngày bằng quy trình rõ ràng và kiểm soát truy cập nhất quán.'],
    context:['A multi-module enterprise platform for operational workflows. Different users need the right capabilities and the right view of shared information.','Nền tảng doanh nghiệp nhiều module phục vụ quy trình vận hành. Mỗi người dùng cần đúng khả năng thao tác và đúng phạm vi thông tin được chia sẻ.'],
    contribution:['I contribute to backend and connected UI workflows, including permission behavior, data visibility, issue investigation and feature verification. My focus is making behavior consistent across the API and the interface.','Mình tham gia backend và các luồng giao diện liên quan: phân quyền, phạm vi hiển thị dữ liệu, điều tra lỗi và xác minh tính năng. Trọng tâm là hành vi nhất quán giữa API và giao diện.'],
    architecture:['A React/Apollo client communicates with Django/Graphene services. Role-based capabilities and company-scoped data filtering support access boundaries; background tasks handle asynchronous work.','React/Apollo giao tiếp với dịch vụ Django/Graphene. Khả năng thao tác theo vai trò và lọc dữ liệu theo công ty hỗ trợ ranh giới truy cập; tác vụ nền xử lý công việc bất đồng bộ.'],
    flow:['React / Apollo','Django / GraphQL','Scoped data & workers'],stack:'React · TypeScript · Django · GraphQL · Celery · Redis',
    limit:['Team contribution, not sole ownership. This overview intentionally excludes proprietary implementation details and customer information.','Đây là đóng góp trong đội ngũ, không phải quyền sở hữu hay thiết kế độc lập toàn bộ hệ thống. Giới thiệu này không chứa chi tiết triển khai độc quyền hoặc dữ liệu khách hàng.']},
  gl:{title:'GL Lifestyle',type:['Professional work · Community services','Dự án công việc · Dịch vụ cộng đồng'],
    lede:['The backend behind connected community services and operational workflows.','Backend kết nối dịch vụ cộng đồng và các quy trình vận hành.'],
    context:['A lifestyle platform connecting residents, operators and service providers. Its backend supports multiple application surfaces and asynchronous integrations.','Nền tảng lifestyle kết nối cư dân, đội vận hành và nhà cung cấp dịch vụ. Backend phục vụ nhiều ứng dụng và các tích hợp bất đồng bộ.'],
    contribution:['My work is on backend services and operational workflows: understanding cross-service behavior, investigating issues and delivering scoped changes with verification.','Mình làm việc với dịch vụ backend và các luồng vận hành: hiểu hành vi giữa dịch vụ, điều tra vấn đề và triển khai thay đổi có phạm vi rõ ràng cùng bước kiểm chứng.'],
    architecture:['A NestJS monorepo separates application services while sharing domain modules. Prisma/PostgreSQL persist data, and BullMQ/Redis workers handle queued processing and integration work.','Monorepo NestJS tách các ứng dụng dịch vụ và chia sẻ module nghiệp vụ. Prisma/PostgreSQL lưu dữ liệu; worker BullMQ/Redis xử lý hàng đợi và tác vụ tích hợp.'],
    flow:['Application services','Shared domain modules','Data & queue workers'],stack:'Node.js · NestJS · TypeScript · Prisma · PostgreSQL · BullMQ · Redis',
    limit:['My contribution is backend-focused. The product’s mobile and other client applications are team context, not a claim of personal authorship.','Đóng góp của mình tập trung ở backend. Ứng dụng mobile và các client khác là bối cảnh sản phẩm của đội ngũ, không phải tuyên bố do mình tự xây.']},
  gdos:{title:'GDOS / Gamuda Defect',type:['Professional work · Property operations','Dự án công việc · Vận hành bất động sản'],
    lede:['Helping teams move from defect reporting to resolution and handover.','Hỗ trợ đội ngũ đi từ ghi nhận lỗi đến xử lý và bàn giao.'],
    context:['A property defect-management system with inspection, handover, reporting and integration workflows. Long-running exports need to stay separate from interactive requests.','Hệ thống quản lý lỗi bất động sản với kiểm tra, bàn giao, báo cáo và tích hợp. Các tác vụ xuất dữ liệu kéo dài cần tách khỏi yêu cầu tương tác.'],
    contribution:['I work on backend maintenance and operational workflows in this codebase, with attention to traceable state changes, reporting and reliable asynchronous processing.','Mình tham gia bảo trì backend và các quy trình vận hành, chú trọng thay đổi trạng thái có thể theo dõi, báo cáo và xử lý bất đồng bộ đáng tin cậy.'],
    architecture:['NestJS domain modules use TypeORM/MySQL for persistence. Bull/Redis consumers handle background reporting and exports, with notifications and external model integrations around the core workflows.','Module nghiệp vụ NestJS dùng TypeORM/MySQL để lưu trữ. Consumer Bull/Redis xử lý báo cáo và xuất dữ liệu nền, kết hợp thông báo và tích hợp mô hình bên ngoài.'],
    flow:['Defect & handover APIs','Domain services / MySQL','Export workers & notifications'],stack:'NestJS · TypeScript · TypeORM · MySQL · Bull · Redis',
    limit:['A high-level account of team work. No client records, internal screens or proprietary code are published here.','Giới thiệu tổng quan về đóng góp trong đội ngũ. Không công khai hồ sơ khách hàng, màn hình nội bộ hoặc mã nguồn độc quyền.']},
  aien:{title:'AIEN / LazyEnglish',type:['Personal project · Foundation phase','Dự án cá nhân · Giai đoạn nền tảng'],
    lede:['Laying a deliberate foundation for an AI-assisted English-learning product.','Xây nền tảng có chủ đích cho sản phẩm học tiếng Anh có AI hỗ trợ.'],
    context:['An early-stage learning-product exploration. The current focus is service boundaries, shared UI contracts and a maintainable path from local experiments to integrated features.','Dự án khám phá sản phẩm học tập ở giai đoạn đầu. Trọng tâm hiện tại là ranh giới dịch vụ, hợp đồng UI dùng chung và hướng tích hợp dễ bảo trì từ thử nghiệm local.'],
    contribution:['I work on the foundations and delivery workflow across a Next.js interface, a Go gateway and Python services, including interface contracts, documentation and evidence-based QA.','Mình làm phần nền tảng và quy trình phát triển trên giao diện Next.js, gateway Go và dịch vụ Python, gồm hợp đồng giao tiếp, tài liệu và QA dựa trên bằng chứng.'],
    architecture:['The Next.js frontend is separated from a Go/Gin gateway and a FastAPI service foundation. Configuration and health adapters establish the seams for later AI and retrieval integration.','Frontend Next.js tách khỏi gateway Go/Gin và nền tảng dịch vụ FastAPI. Cấu hình và adapter health tạo điểm nối cho tích hợp AI và truy xuất dữ liệu sau này.'],
    flow:['Next.js interface','Go / Gin gateway','FastAPI service foundation'],stack:'Next.js · React · TypeScript · Go · Gin · Python · FastAPI',
    limit:['In progress. These are service and UI foundations, not a claim of production-ready adaptive learning or a completed RAG system. Source remains private.','Đang phát triển. Đây là nền tảng dịch vụ và UI, chưa phải sản phẩm học thích ứng sẵn sàng production hoặc hệ thống RAG hoàn chỉnh. Source vẫn được giữ riêng tư.']}
};
let language: Language = 'en';
try { if (localStorage.getItem('hieu-language') === 'vi') language = 'vi'; } catch { /* Storage is optional. */ }
const dialog = document.querySelector<HTMLDialogElement>('#project-dialog')!;
const dialogContent = document.querySelector<HTMLDivElement>('#dialog-content')!;
let activeProject: string | undefined;
let returnFocus: HTMLElement | null = null;
let previousHash = '#work';
let openedByClick = false;
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]!));
const t = (value: [string, string]) => value[language === 'en' ? 0 : 1];
function renderProject(id: string) {
  const project = projects[id];
  document.querySelector('#dialog-label')!.textContent = t(project.type);
  const labels = language === 'en' ? ['The context','My contribution','How it fits together','Explore source'] : ['Bối cảnh','Đóng góp của mình','Kiến trúc tổng quan','Xem source'];
  dialogContent.innerHTML = `<h2 id="dialog-title">${escapeHtml(project.title)}</h2><p class="dialog-lede">${escapeHtml(t(project.lede))}</p>${[project.context,project.contribution,project.architecture].map((section,index)=>`<section class="dialog-section"><h3>${labels[index]}</h3><p>${escapeHtml(t(section))}</p></section>`).join('')}<ol class="architecture" aria-label="${language === 'en' ? 'Architecture overview' : 'Kiến trúc tổng quan'}">${project.flow.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ol><p class="dialog-tech">${escapeHtml(project.stack)}</p><p class="dialog-limit">${escapeHtml(t(project.limit))}</p>${project.source ? `<div class="dialog-footer"><a class="text-link" href="${project.source}" target="_blank" rel="noopener noreferrer">${labels[3]} <span aria-hidden="true">↗</span></a></div>` : ''}`;
}
function updateLanguage(next: Language) {
  language = next;
  document.documentElement.lang = next;
  elements.forEach(el => { const key=el.dataset.i18n!; el.textContent = (next === 'vi' ? vi[key] : en[key]) ?? en[key]; });
  document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === next)));
  document.querySelector('.close-dialog')!.setAttribute('aria-label', next === 'en' ? 'Close project details' : 'Đóng chi tiết dự án');
  document.querySelector('nav')!.setAttribute('aria-label',next === 'en' ? 'Main navigation' : 'Điều hướng chính');
  document.querySelector('.project-image')!.setAttribute('aria-label',next === 'en' ? 'Read the SignBridge case study' : 'Xem chi tiết dự án SignBridge');
  document.querySelector('.portrait img')!.setAttribute('alt',next === 'en' ? 'Hiếu Trần standing on stone steps in front of a historic building' : 'Hiếu Trần đứng trên bậc đá trước một tòa nhà cổ');
  document.querySelector('.project-image img')!.setAttribute('alt',next === 'en' ? 'SignBridge learning interface showing Vietnamese sign-language lesson categories' : 'Giao diện SignBridge với các nhóm bài học ngôn ngữ ký hiệu Việt Nam');
  document.querySelector('.purpose-map')!.setAttribute('aria-label',next === 'en' ? 'A conceptual map connecting people, workflows and clarity' : 'Sơ đồ ý tưởng kết nối con người, quy trình và sự rõ ràng');
  document.title = next === 'en' ? 'Hiếu Trần — Ideas into useful things' : 'Hiếu Trần — Từ ý tưởng đến điều có ích';
  document.querySelector('#copy-status')!.textContent = '';
  if (activeProject) renderProject(activeProject);
  try { localStorage.setItem('hieu-language',next); } catch { /* Storage is optional. */ }
}
document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach(button => button.addEventListener('click',()=>updateLanguage(button.dataset.lang as Language)));
function syncProject() {
  const id = location.hash.startsWith('#project-') ? location.hash.slice(9) : '';
  if (!projects[id]) { if(dialog.open) dialog.close(); activeProject=undefined; return; }
  activeProject=id;
  renderProject(id);
  if(!dialog.open) { dialog.showModal(); document.body.style.overflow='hidden'; }
  dialog.scrollTop=0;
}
document.querySelectorAll<HTMLAnchorElement>('a[href^="#project-"]').forEach(link=>link.addEventListener('click',()=>{
  returnFocus=link;previousHash=location.hash || '#work';openedByClick=true;
  if(location.hash === link.hash) syncProject();
}));
function closeProject() {
  if(openedByClick) history.back();
  else { history.replaceState(null,'',`${location.pathname}${location.search}${previousHash}`); syncProject(); }
}
document.querySelector('.close-dialog')!.addEventListener('click',closeProject);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeProject();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeProject();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';activeProject=undefined;openedByClick=false;returnFocus?.focus({preventScroll:true});});
window.addEventListener('hashchange',syncProject);
document.querySelector('#copy-email')!.addEventListener('click',async()=>{
  const status=document.querySelector('#copy-status')!;
  try { await navigator.clipboard.writeText('minhhieu.tran.mcs@gmail.com');status.textContent=language==='en'?'Email copied. Say hello anytime.':'Đã sao chép. Hẹn gặp bạn trong hộp thư!'; }
  catch { status.textContent='minhhieu.tran.mcs@gmail.com'; }
});
updateLanguage(language);
syncProject();
