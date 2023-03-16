import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {
  BambooReconcileService,
} from "@core/services";
@Component({
  selector: "ite-wallet-financial-reconcile-detail",
  templateUrl: "./wallet-financial-reconcile-detail.component.html",
  styleUrls: ["./wallet-financial-reconcile-detail.component.scss"],
})

export class WalletFinancialReconcileDetailComponent implements OnInit {

  dataFee = {
    body: [
      {
        type: "Phí xử lí giao dịch QLRR",
        feeDVCNTT: "0",
        feePaidDVCNTT: "0",
        feePaidCTV: "0",
        turnover: "0",
      },
      {
        type: "Phí thanh toán",
        feeDVCNTT: "0",
        feePaidDVCNTT: "0",
        feePaidCTV: "0",
        turnover: "0",
      },
      {
        type: "Phí chia sẻ dịch vụ",
        feeDVCNTT: "0",
        feePaidDVCNTT: "0",
        feePaidCTV: "0",
        turnover: "0",
      },
      {
        type: "Phí xử lý giao dịch",
        feeDVCNTT: "0",
        feePaidDVCNTT: "0",
        feePaidCTV: "0",
        turnover: "0",
      },
      {
        type: "Phí xử lý giao dịch tokennization",
        feeDVCNTT: "0",
        feePaidDVCNTT: "0",
        feePaidCTV: "0",
        turnover: "0",
      },
    ],
    footer: [
      {
        name: "Tổng",
        feeDVCNTT: "0",
        feePaidDVCNTT: "0",
        feePaidCTV: "0",
        turnover: "0",
      },
      {
        name: "VAT",
        feeDVCNTT: "0",
        feePaidDVCNTT: "0",
        feePaidCTV: "0",
        turnover: "0",
      },
      {
        name: "Tổng (VAT)",
        feeDVCNTT: "0",
        feePaidDVCNTT: "0",
        feePaidCTV: "0",
        turnover: "0",
      },
    ],
  };
  public id: number = this.route.snapshot.params.id;
  public loading = true;
  public dataDetail : any;
  public dataOriginal : [];
  constructor(private route: ActivatedRoute,public bambooService: BambooReconcileService) {}

  ngOnInit(): void {
    this.getDataDetail({id: this.id});
  }
  getDataDetail(request) {
    this.loading = true;
    this.dataDetail = null;
    this.dataOriginal = [];
    this.bambooService.getWalletReconcileDetail(request).subscribe((data) => {
      this.dataDetail = data.data ? data.data : null;
      this.dataOriginal = data.data?.infoSource ? data.data.infoSource : [];
      this.loading = false;
    });
  }
}
