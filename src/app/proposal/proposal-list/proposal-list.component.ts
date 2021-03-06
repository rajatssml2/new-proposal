import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposalList: any = [];
  date = new Date().toLocaleDateString()
  loginUser: any = '';
  isLoading = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let lUser = localStorage.getItem('loginUser');
    this.loginUser = lUser;
    let oArr = [
      {
        "id":699300,
        "purpose":"abc",
        "category":"",
        "upload":"",
        "fileSource":"",
        "remarks":"",
        "sentTo":"",
        "status": lUser=='iva' ? "Verified by state manager"  : lUser=='morth_manager' ? "Verified by IVA" : "Submitted by state officer",
        submittedOn: '5/20/2022'
      },
      {
        "id":699453,
        "purpose":"xyz",
        "category":"",
        "upload":"",
        "fileSource":"",
        "remarks":"",
        "sentTo":"",
        "status":lUser=='iva' ? "Verified by state manager"  : lUser=='morth_manager' ? "Verified by IVA" : "Submitted by state officer",
        submittedOn: '4/10/2022'
      }
    ]
    let list:any = localStorage.getItem('proposalData');
    list = JSON.parse(list);
    if(list && list.length>0) {
      oArr.unshift(list[0])
      this.proposalList = oArr;
    }
    
  }
  onView(proposal: any) {
    console.log("proposal=",proposal);
    let tt = JSON.stringify(proposal)
    this.router.navigate(['edit-proposal', {items: proposal.id}])
  }
  onCheckFundAvailability(index: any) {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false;
      if(index == 0) {
        Swal.fire({
          icon: 'success',
          text: 'Total Fund allocatted: INR 2,55,00,000.00, Fund utilised till date: INR 1,35,00,000.00, Fund is available',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'Ok'
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          
        })
      } else {
        Swal.fire({
          icon: 'warning',
          text: 'Total Fund allocatted: INR 3,55,00,000.00, Fund utilised till date: INR 3,55,00,000.00, Fund is utilized',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'Ok'
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          
        })
      }
      
    }, 2000);
    
    
  }

}
