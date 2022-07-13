import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposalList: any = [];
  date = new Date().toLocaleDateString()
  constructor(private router: Router) { }

  ngOnInit(): void {
    let list:any = localStorage.getItem('proposalData');
    list = JSON.parse(list);
    if(list && list.length>0) {
      this.proposalList = list;
    }
  }
  onView(proposal: any) {
    console.log("proposal=",proposal);
    let tt = JSON.stringify(proposal)
    this.router.navigate(['edit-proposal', {items: proposal.id}])
  }

}
