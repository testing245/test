// Date formatting function
function formatDate() {
    const today = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    
    const dayName = days[today.getDay()];
    const date = today.getDate().toString().padStart(2, '0');
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    
    return `${dayName}, ${date} ${month} ${year}`;
}

// Update date on page load
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = formatDate();
    }
});

// Bottom navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
});

// Header buttons functionality
document.addEventListener('DOMContentLoaded', function() {
    const settingsBtn = document.querySelector('.settings-btn');
    const bellBtn = document.querySelector('.bell-btn');
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            alert('Pengaturan akan segera tersedia!');
        });
    }
    
    if (bellBtn) {
        bellBtn.addEventListener('click', function() {
            alert('Tidak ada notifikasi baru!');
        });
    }
});


// Greeting based on time
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const greetingElement = document.querySelector('.greeting');
    
    if (greetingElement) {
        let greeting;
        
        if (hour < 12) {
            greeting = 'Selamat Pagi!';
        } else if (hour < 17) {
            greeting = 'Selamat Siang!';
        } else if (hour < 19) {
            greeting = 'Selamat Sore!';
        } else {
            greeting = 'Selamat Malam!';
        }
        
        greetingElement.textContent = greeting;
    }
}

// Update greeting on page load
document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
});

// Add click animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('.nav-item, .settings-btn, .bell-btn');
    
    interactiveElements.forEach(element => {
        element.style.transition = 'all 0.2s ease';
    });
});

// Sample pengumuman data
const pengumumanData = [
    {
        id: 1,
        title: "Libur Nasional Hari Kemerdekaan",
        content: "Sekolah akan libur pada tanggal 17 Agustus 2024 dalam rangka memperingati Hari Kemerdekaan RI ke-79.",
        date: "15 Agustus 2024"
    },
    {
        id: 2,
        title: "Ujian Tengah Semester",
        content: "Ujian Tengah Semester akan dilaksanakan mulai tanggal 23-30 September 2024. Harap persiapkan diri dengan baik.",
        date: "20 Agustus 2024"
    },
    {
        id: 3,
        title: "Kegiatan Ekstrakurikuler",
        content: "Pendaftaran ekstrakurikuler untuk semester ganjil dibuka mulai tanggal 1 September 2024.",
        date: "25 Agustus 2024"
    },
    {
        id: 4,
        title: "Rapat Orang Tua",
        content: "Rapat orang tua siswa akan diadakan pada hari Sabtu, 14 September 2024 pukul 08.00 WIB di aula sekolah.",
        date: "10 September 2024"
    },
    {
        id: 5,
        title: "Kompetisi Sains",
        content: "Sekolah akan mengadakan kompetisi sains tingkat nasional. Pendaftaran dibuka hingga 30 September 2024.",
        date: "12 September 2024"
    }
];

let showingAll = false;

function renderPengumuman() {
    const pengumumanList = document.getElementById('pengumumanList');
    const lihatSemuaBtn = document.getElementById('lihatSemuaBtn');
    
    if (!pengumumanList || !lihatSemuaBtn) return;
    
    const itemsToShow = showingAll ? pengumumanData : pengumumanData.slice(0, 2);
    
    pengumumanList.innerHTML = itemsToShow.map(item => `
        <div class="pengumuman-item">
            <h4 class="pengumuman-title">${item.title}</h4>
            <p class="pengumuman-content">${item.content}</p>
            <span class="pengumuman-date">${item.date}</span>
        </div>
    `).join('');
    
    // Show/hide "Lihat Semua" button
    if (pengumumanData.length > 2) {
        lihatSemuaBtn.style.display = 'block';
        lihatSemuaBtn.textContent = showingAll ? 'Lihat Sedikit' : 'Lihat Semua';
    } else {
        lihatSemuaBtn.style.display = 'none';
    }
}

function togglePengumuman() {
    showingAll = !showingAll;
    renderPengumuman();
}

// Initialize pengumuman
document.addEventListener('DOMContentLoaded', function() {
    renderPengumuman();
    
    // Event listener for "Lihat Semua" button
    const lihatSemuaBtn = document.getElementById('lihatSemuaBtn');
    if (lihatSemuaBtn) {
        lihatSemuaBtn.addEventListener('click', togglePengumuman);
    }
});