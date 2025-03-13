document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetScreen = this.getAttribute('data-target');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show target screen
            screens.forEach(screen => {
                screen.classList.remove('active');
                if (screen.id === targetScreen) {
                    screen.classList.add('active');
                }
            });
        });
    });
    
    // Login functionality
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', function() {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('dashboard-screen').classList.add('active');
    });
    
    // Team card click
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            document.getElementById('dashboard-screen').classList.remove('active');
            document.getElementById('team-details-screen').classList.add('active');
            
            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector('[data-target="teams-screen"]').classList.add('active');
        });
    });
    
    // Add team card click
    const addTeamCard = document.querySelector('.add-team-card');
    addTeamCard.addEventListener('click', function() {
        document.getElementById('dashboard-screen').classList.remove('active');
        document.getElementById('create-team-screen').classList.add('active');
    });
    
    // Back buttons
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentScreen = this.closest('.screen');
            
            if (currentScreen.id === 'team-details-screen' || currentScreen.id === 'create-team-screen') {
                // Go back to dashboard
                currentScreen.classList.remove('active');
                document.getElementById('dashboard-screen').classList.add('active');
                
                // Update active nav
                navItems.forEach(nav => nav.classList.remove('active'));
                document.querySelector('[data-target="dashboard-screen"]').classList.add('active');
            } else if (currentScreen.id === 'add-advancement-screen') {
                // Go back to team details
                currentScreen.classList.remove('active');
                document.getElementById('team-details-screen').classList.add('active');
            }
        });
    });
    
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-target');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show target tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Add advancement button
    const addAdvancementBtn = document.querySelector('.add-advancement-btn');
    if (addAdvancementBtn) {
        addAdvancementBtn.addEventListener('click', function() {
            document.getElementById('team-details-screen').classList.remove('active');
            document.getElementById('add-advancement-screen').classList.add('active');
        });
    }
    
    // Submit advancement button
    const submitAdvancementBtn = document.querySelector('.submit-advancement-btn');
    if (submitAdvancementBtn) {
        submitAdvancementBtn.addEventListener('click', function() {
            document.getElementById('add-advancement-screen').classList.remove('active');
            document.getElementById('team-details-screen').classList.add('active');
            
            // Here you could add code to update the advancements list
            // with the new advancement, but for the prototype we'll just go back
        });
    }
    
    // Logout button
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            document.getElementById('logout-modal').classList.add('active');
        });
    }
    
    // Logout modal buttons
    const confirmLogoutBtn = document.getElementById('confirm-logout');
    const goToProfileBtn = document.getElementById('go-to-profile');
    const goToTeamsBtn = document.getElementById('go-to-teams');
    const closeModalBtn = document.getElementById('close-modal');
    
    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener('click', function() {
            document.getElementById('logout-modal').classList.remove('active');
            document.getElementById('profile-screen').classList.remove('active');
            document.getElementById('login-screen').classList.add('active');
        });
    }
    
    if (goToProfileBtn) {
        goToProfileBtn.addEventListener('click', function() {
            document.getElementById('logout-modal').classList.remove('active');
            // Already on profile screen
        });
    }
    
    if (goToTeamsBtn) {
        goToTeamsBtn.addEventListener('click', function() {
            document.getElementById('logout-modal').classList.remove('active');
            document.getElementById('profile-screen').classList.remove('active');
            document.getElementById('dashboard-screen').classList.add('active');
            
            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector('[data-target="dashboard-screen"]').classList.add('active');
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            document.getElementById('logout-modal').classList.remove('active');
        });
    }
    
    // Create team button
    const createTeamBtn = document.querySelector('.create-team-btn');
    if (createTeamBtn) {
        createTeamBtn.addEventListener('click', function() {
            document.getElementById('create-team-screen').classList.remove('active');
            document.getElementById('dashboard-screen').classList.add('active');
            
            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector('[data-target="dashboard-screen"]').classList.add('active');
            
            // Here you could add code to create a new team card
            // but for the prototype we'll just go back to dashboard
        });
    }

    // Sample user data for demo purposes
    const users = [
        { name: 'Nicolas Calero', img: 'images/woman2.png' },
        { name: 'Esteban Ruiz', img: 'images/woman2.png' },
        { name: 'Andrea Coronado', img: 'images/woman2.png' },
        { name: 'Margarita Rodriguez', img: 'images/woman2.png' },
        { name: 'Juan Garzon', img: 'images/woman2.png' }
    ];

    // Sample teams data for demo purposes
    const teams = [
        { name: 'Equipo UX', status: 'complete', dailyTime: '11:00AM', alarmTime: '10:45AM' },
        { name: 'Trabajo DAN', status: 'incomplete', dailyTime: '11:00AM', alarmTime: '10:45AM' },
        { name: 'Empresarial', status: 'incomplete', dailyTime: '11:00AM', alarmTime: '10:45AM' },
        { name: 'Trabajo Equipo', status: 'complete', dailyTime: '11:00AM', alarmTime: '10:45AM' }
    ];

    // Add click listeners to advancement items
    let advancementItems = document.querySelectorAll('.advancement-item');
    

     advancementItems.forEach(item => {
         item.addEventListener('click', function() {
             document.getElementById('team-details-screen').classList.remove('active');
             document.getElementById('advancement-detail-screen').classList.add('active');
         });
     });
     
     // Back button from advancement detail
     const advancementDetailBackBtn = document.querySelector('#advancement-detail-screen .back-button');
     if (advancementDetailBackBtn) {
         advancementDetailBackBtn.addEventListener('click', function() {
             document.getElementById('advancement-detail-screen').classList.remove('active');
             document.getElementById('team-details-screen').classList.add('active');
         });
     }
     
     // Like button functionality
     const likeBtn = document.querySelector('.like-btn');
     if (likeBtn) {
         likeBtn.addEventListener('click', function() {
             this.classList.toggle('active');
             const likeCount = this.querySelector('span');
             if (this.classList.contains('active')) {
                 likeCount.textContent = '4 Likes';
             } else {
                 likeCount.textContent = '3 Likes';
             }
         });
     }
     
     // Comment button functionality
     const commentBtn = document.querySelector('.comment-btn');
     if (commentBtn) {
         commentBtn.addEventListener('click', function() {
             document.querySelector('.comment-input').focus();
         });
     }
     
     // Send comment functionality
     const sendCommentBtn = document.querySelector('.send-comment-btn');
     const commentInput = document.querySelector('.comment-input');
     if (sendCommentBtn && commentInput) {
         sendCommentBtn.addEventListener('click', function() {
             const commentText = commentInput.value.trim();
             if (commentText) {
                 // Create new comment element
                 const commentsSection = document.querySelector('.comments-section');
                 const newComment = document.createElement('div');
                 newComment.className = 'comment-item';
                 newComment.innerHTML = `
                     <img src="images/woman2.png" alt="User" class="user-img">
                     <div class="comment-content">
                         <div class="comment-author">Nicolas Calero</div>
                         <div class="comment-text">${commentText}</div>
                         <div class="comment-date">Justo ahora</div>
                     </div>
                 `;
                 
                 // Insert before the add comment section
                 commentsSection.insertBefore(newComment, document.querySelector('.add-comment'));
                 
                 // Update comment count
                 const commentCount = document.querySelector('.comments-section h4');
                 const currentCount = parseInt(commentCount.textContent.match(/\d+/)[0]);
                 commentCount.textContent = `Comentarios (${currentCount + 1})`;
                 
                 // Clear input
                 commentInput.value = '';
             }
         });
         
         // Allow sending comments with Enter key
         commentInput.addEventListener('keypress', function(e) {
             if (e.key === 'Enter') {
                 sendCommentBtn.click();
             }
         });
     }
     
     // Add "View Team Members" functionality
     const membersTab = document.querySelector('[data-target="members-tab"]');
     if (membersTab) {
         membersTab.addEventListener('click', function() {
             // Add a button to show detailed members view
             const membersTab = document.getElementById('members-tab');
             
             // Check if the view members button already exists
             if (!document.querySelector('.view-members-btn')) {
                 const viewMembersBtn = document.createElement('button');
                 viewMembersBtn.className = 'view-members-btn';
                 viewMembersBtn.textContent = 'Ver todos los miembros';
                 viewMembersBtn.style.cssText = `
                     display: block;
                     margin: 20px auto 0;
                     padding: 10px 15px;
                     background-color: #782424;
                     color: white;
                     border: none;
                     border-radius: 5px;
                     cursor: pointer;
                 `;
                 
                 viewMembersBtn.addEventListener('click', function() {
                     document.getElementById('team-details-screen').classList.remove('active');
                     document.getElementById('add-member-screen').classList.add('active');
                 });
                 
                 membersTab.appendChild(viewMembersBtn);
             }
         });
     }
     
     // Back button from add member screen
     const addMemberBackBtn = document.querySelector('#add-member-screen .back-button');
     if (addMemberBackBtn) {
         addMemberBackBtn.addEventListener('click', function() {
             document.getElementById('add-member-screen').classList.remove('active');
             document.getElementById('team-details-screen').classList.add('active');
             
             // Ensure the members tab is active when returning
             document.querySelector('[data-target="members-tab"]').click();
         });
     }
     
     // Method tabs in add member screen
     const methodTabs = document.querySelectorAll('.method-tab');
     if (methodTabs.length > 0) {
         methodTabs.forEach(tab => {
             tab.addEventListener('click', function() {
                 // Update active tab
                 methodTabs.forEach(t => t.classList.remove('active'));
                 this.classList.add('active');
                 
                 // Show corresponding content
                 const methodContents = document.querySelectorAll('.method-content');
                 const targetMethod = this.getAttribute('data-method');
                 
                 methodContents.forEach(content => {
                     content.classList.remove('active');
                     if (content.id === targetMethod + '-method') {
                         content.classList.add('active');
                     }
                 });
             });
         });
     }
     
     // Copy link functionality
     const copyLinkBtn = document.querySelector('.copy-link-btn');
     const linkInput = document.querySelector('.link-input');
     if (copyLinkBtn && linkInput) {
         copyLinkBtn.addEventListener('click', function() {
             linkInput.select();
             document.execCommand('copy');
             
             // Change button text temporarily
             const originalText = this.textContent;
             this.textContent = '¡Copiado!';
             setTimeout(() => {
                 this.textContent = originalText;
             }, 2000);
         });
     }
     
     // Send invitations functionality
     const sendInvitesBtn = document.querySelector('.send-invites-btn');
     if (sendInvitesBtn) {
         sendInvitesBtn.addEventListener('click', function() {
             const emailInput = document.querySelector('.email-input');
             if (emailInput.value.trim()) {
                 alert('Invitaciones enviadas con éxito');
                 emailInput.value = '';
             } else {
                 alert('Por favor, ingresa al menos un correo electrónico');
             }
         });
     }
});