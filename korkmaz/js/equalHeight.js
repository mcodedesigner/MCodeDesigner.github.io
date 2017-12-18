$(document).ready(function() {
 function setEqualHeight(columns)
 {
 var tallestcolumn = 0;
 columns.each(
 function()
 {
 currentHeight = $(this).height();
 if(currentHeight > tallestcolumn)
 {
 tallestcolumn  = currentHeight;
 }
 }
 );
 columns.height(tallestcolumn);
 }
 setEqualHeight($(".hits_product .price"));
 setEqualHeight($(".block_comments .content, .block_comments .right-col-4"));
 setEqualHeight($(".content_article .content, .content_article .sidebar"));
});