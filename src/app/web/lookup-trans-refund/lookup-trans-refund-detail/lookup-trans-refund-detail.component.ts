import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LookupTransactionService } from "@core/services";

@Component({
  selector: "ite-lookup-trans-refund-detail",
  templateUrl: "./lookup-trans-refund-detail.component.html",
  styleUrls: ["./lookup-trans-refund-detail.component.scss"],
})
export class LookupTransRefundDeatilComponent implements OnInit {
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
  public refundNumber: string = this.route.snapshot.params.id;
  public loading = true;
  public dataDetail: any;
  public otherTransactions: [];
  constructor(
    private route: ActivatedRoute,
    public lookupService: LookupTransactionService
  ) {}
  ngOnInit(): void {
    this.getDataDetail({ refundNumber: this.refundNumber });
  }
  getDataDetail(request) {
    this.loading = true;
    this.dataDetail = null;
    this.otherTransactions = [];
    this.lookupService.getDetailLookupTransRefund(request).subscribe((data) => {
      this.dataDetail = data.data ? data.data : null;
      this.otherTransactions = data.data?.otherTransactions
        ? data.data.otherTransactions
        : [];
      this.loading = false;
    });
  }
  formatMoney(str: any, n, x) {
    try {
      var re = "(\\d)(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
      return parseInt(str).toFixed(n).replace(new RegExp(re, "g"), "$1,");
    } catch {}
    return str;
  }
}
