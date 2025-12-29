// Navigasi mengecil saat scroll
window.onscroll = function() {
    const nav = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.padding = "20px 8%";
        nav.style.background = "#fff";
    } else {
        nav.style.padding = "40px 8%";
        nav.style.background = "transparent";
    }
};

// Modal Pop-up
function openModal(title, desc, img) {
    const modal = document.getElementById("projectModal");
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("modalImg").src = img;
    
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Kunci scroll layar belakang
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "auto"; // Aktifkan scroll lagi
}

// Tambahan: Klik area kosong (luar gambar) untuk menutup modal
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        closeModal();
    }
};

// Tambahan: Tekan tombol 'Esc' di keyboard untuk menutup
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});

const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.work-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Pindah class active
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        items.forEach(item => {
            // Gunakan atribut data-category yang sudah kamu buat di HTML
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'inline-block';
                item.style.animation = 'fadeIn 0.5s forwards';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Pastikan fungsi Modal tetap ada di bawahnya
function openModal(title, desc, img) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("modalImg").src = img;
    document.getElementById("projectModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}